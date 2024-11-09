import { PiBracketsCurlyLight } from "react-icons/pi";
import { GiPublicSpeaker } from "react-icons/gi";
import { GiMonkFace } from "react-icons/gi";
import { IoWalkOutline } from "react-icons/io5";
import { IoGameController } from "react-icons/io5";
import { FcBullish } from "react-icons/fc";
import { FcCamera } from "react-icons/fc";
import { RiTreasureMapFill } from "react-icons/ri";
import { FcCalculator } from "react-icons/fc";
import { FcManager } from "react-icons/fc";
import React from "react";

export const EventsSideBar = [
    {
        icon : React.createElement(PiBracketsCurlyLight,{ color : "red" , size : `${window.innerWidth < 600 ? '20px' : '40px'}`}),
        name : 'Coding'
    },
    {
        icon : React.createElement(GiPublicSpeaker, {color : "red" , size : `${window.innerWidth < 600 ? '20px' : '40px'}`}),
        name : 'Debate'
    },
    {
        icon : React.createElement(GiMonkFace, {color :"red", size : `${window.innerWidth < 600 ? '20px' : '40px'}`}),
        name : 'Face Painting'
    },
    {
        icon : React.createElement(IoWalkOutline, {color :"red", size : `${window.innerWidth < 600 ? '20px' : '40px'}`}),
        name : 'Fashion Walk'
    },
    {
        icon : React.createElement(IoGameController, {color : "red", size : `${window.innerWidth < 600 ? '20px' : '40px'}`}),
        name : 'Gaming'
    },
    {
        icon : React.createElement(FcManager ,{size : `${window.innerWidth < 600 ? '20px' : '40px'}`}),
        name : 'IT Manager'
    },
    {
        icon : React.createElement(FcCalculator,{size : `${window.innerWidth < 600 ? '20px' : '40px'}`}),
        name : 'IT Quiz'
    },
    {
        icon : React.createElement(FcCamera,{size : `${window.innerWidth < 600 ? '20px' : '40px'}`}),
        name : 'Photography'
    },
    {
        icon : React.createElement(FcBullish,{size : `${window.innerWidth < 600 ? '20px' : '40px'}`}),
        name : 'Data Analytics'
    },
    {
        icon : React.createElement(RiTreasureMapFill,{size : `${window.innerWidth < 600 ? '20px' : '40px'}`}),
        name : 'Treasure Hunt'
    },
]