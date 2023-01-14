import { AiFillCar, AiFillDashboard } from 'react-icons/ai'
import { FaUser } from 'react-icons/fa'
import {BiPackage } from "react-icons/bi";
import {FcMoneyTransfer } from "react-icons/fc";
import {BiLogOut } from "react-icons/bi";
import { GiReceiveMoney } from 'react-icons/gi';



export const links = [
    {id:1, title: 'Dashboard', ref: "/dashboard", icon: <AiFillDashboard size={25} />},
    {id:2, title: 'Rented Car', ref: "/cars", icon: <AiFillCar size={25} />},
    {id:5, title: 'My Profile', ref: "/profile", icon: <FaUser size={25} />},
    {id:6, title: 'Logout', ref: "/logout", icon: <BiLogOut size={25} />},
]