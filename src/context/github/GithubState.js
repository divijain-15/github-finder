import React, {useReducer} from "react";
import axios from 'axios';
import GithubContext from './githubContext';
import GithubReducer from './GithubReducer';
import {
  SEARCH_USERS,
  SET_LOADING,
  CLEAR_USERS,
  GET_USER,
  GET_REPOS
} from '../types';

const GithubState = props => {
    const initialState = {
      users: [],
      user: {},
      repos: [],
      loading: false
    };


const [state, dispatch] = useReducer(GithubReducer, initialState);

//Search Users

const searchUsers = async(text)=>{

    setLoading();
    const res = await axios.get(`https://api.github.com/search/users?q=${text}`);
    dispatch({
        type:SEARCH_USERS,
        payload:res.data.items
    })
  }

  //clear users 
  const clearUsers = ()=> dispatch({type:CLEAR_USERS})

  // get single github user
  const getUser = async (username)=>{
    setLoading();
    const res = await axios.get(`https://api.github.com/users/${username}?client_id=62fef7b215581e6ba4ae
    &client_secret=0e8d1a855b04a0531e9ac7bd0e92217b808c0091`);
    dispatch({
      type:GET_USER,
      payload:res.data
    })
  }

  //get user repos
  const getUserRepos = async (username)=>{
    setLoading(true);
   
    const res = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5sort=created:asc`);
    dispatch({
      type:GET_REPOS,
      payload:res.data
    })
  }


  //Loading 
  const setLoading = () => dispatch({type:SET_LOADING});


return (
<GithubContext.Provider
     value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        searchUsers,
        clearUsers,
        getUser,
        getUserRepos
     }}>
     {props.children}
</GithubContext.Provider>
)
    }

    export default GithubState;