import React from 'react';
import Index from "../view/index/index";
import Course from "../view/course/index";
import Lecturer from "../view/lecturer/index";
import Work from "../view/work/index";
import Login from "../view/login/index";

const routeList = [
  {
    name: "首页",
    path: "/",
    exact: true, //是否精确匹配
    render(props) {
      return <Index {...props}/>
    }
  },
  {
    name: "课程安排",
    path: "/course",
    exact: true, //是否精确匹配
    render(props) {
      return <Course {...props}/>
    }
  },
  {
    name: "讲师团队",
    path: "/lecturer",
    exact: true, //是否精确匹配
    render(props) {
      return <Lecturer {...props}/>
    }
  },
  {
    name: "作品详情",
    path: "/work",
    exact: true, //是否精确匹配
    render(props) {
      return <Work {...props}/>
    }
  },
  {
    name: "登录注册",
    path: "/login",
    exact: true, //是否精确匹配
    render(props) {
      return <Login {...props}/>
    }
  },
];

export default routeList;