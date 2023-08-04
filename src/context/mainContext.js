import React, { Component, createContext } from 'react';
// http calling to backend
import LoginOrRegisterServies from '../services/loginOrRegister';
const context = createContext();


class ContextProvider extends Component {
  state = {
    isShown: false,
    popUpText: '',
    topRatedTv: [],
    tvOnAir: [],
    topRatedMovie: [],
    movieOnAir: [],
    twoMovieNTwoTv: [],
    errorMsg: '',
    user: JSON.parse(localStorage.getItem('user')) || null
  }



  
  fetchData = (url, screenPlayType) => {
    let movieOrTv;
    if(screenPlayType.includes('Movie')) {
      movieOrTv = 'Movies'
    } else if(screenPlayType.includes('Tv')) {
      movieOrTv = 'TV Shows'
    }
    let screenPlayTypeArr = screenPlayType.split(' ');
    let screenPlayTypeState = screenPlayTypeArr[0].toLowerCase() + screenPlayTypeArr.slice(1).join('');

    fetch(url)
      .then(res => res.json())
      .then(data => {
        let hightestVoteCount = Math.max(...data.results.map(movieOrTv => Number(movieOrTv.vote_count)));
        let [hightestVoteCountMovieOrTv] = data.results.filter(movieOrTv => movieOrTv.vote_count === hightestVoteCount);
        hightestVoteCountMovieOrTv.type = screenPlayType;
        hightestVoteCountMovieOrTv.movieOrTv = movieOrTv;
        hightestVoteCountMovieOrTv.streamPlace = screenPlayTypeState;

        
        this.setState((preState) => {
          return {
            twoMovieNTwoTv: [...preState.twoMovieNTwoTv, hightestVoteCountMovieOrTv],
            [screenPlayTypeState]: data.results
          }
        })
      })
  }
  
  componentDidMount() {
    const API_KEY = process.env.REACT_APP_API_KEY;
    const topRatedTvUrl = `https://api.themoviedb.org/3/tv/top_rated?api_key=${API_KEY}&language=en-US&page=1`;
    const tvOnAirUrl = `https://api.themoviedb.org/3/tv/on_the_air?api_key=${API_KEY}&language=en-US&page=1`; 
    const topRatedMovieUrl = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`; 
    const mvoieOnAirUrl = `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`;

    this.fetchData(topRatedTvUrl, 'Top Rated Tv');
    this.fetchData(tvOnAirUrl, 'Tv On Air');
    this.fetchData(topRatedMovieUrl, 'Top Rated Movie');
    this.fetchData(mvoieOnAirUrl, 'Movie On Air');
  }

  LoginOrRegister = (type, userInfo) => {
    LoginOrRegisterServies[type](userInfo)
        .then((res => {
          localStorage.setItem('user', JSON.stringify(res.data));
          this.setState({
            user: res.data
          });
          document.querySelector('body').style.overflowY = 'scroll';
        }))
        .catch((e) => {
          this.setErrorMsg(e.response.data.msg)
        });
  };

  logout = () => {
    localStorage.clear();
    this.setState({
      user: null
    })
  }

  setErrorMsg = (msg) => {
    this.setState({
      errorMsg: msg
    })
    setTimeout(() => {
      this.setState({
        errorMsg: ''
      })
    }, 3000);
  }
  
  openPopup = (text) => {
    this.setState({
      isShown: true,
      popUpText: text
    })
    document.querySelector('body').style.overflowY = 'hidden'
  };

  closePopup = () => {
    this.setState({
      isShown: false
    })
    document.querySelector('body').style.overflowY = 'scroll'
  };


  render() {
    return (
      <context.Provider value={
        {
          value: this.state,
          openPopup: this.openPopup, 
          closePopup: this.closePopup,
          LoginOrRegister: this.LoginOrRegister,
          logout: this.logout,
        }
      }>
        {this.props.children}
      </context.Provider>
    );
  };
}
export {ContextProvider, context};
