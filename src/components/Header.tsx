import React,{ useState, useCallback } from "react";
import { convertSlug } from "../untils";
import { AiOutlineSearch } from "react-icons/ai"
import { useRouter } from "next/router";
import Link from "next/link";
const Header = () => {
     const [searchTxt, setSearchTxt] = useState('')
     const handleSearch = useCallback(() => {
          if (!searchTxt) return;
          router.push({
               pathname : `/search`,
               query:{"q":convertSlug(searchTxt)}
          })
     }, [searchTxt]);
     const router = useRouter()
     return(
          <div className="navbar">
               <ul>
                    <li className = {(router.pathname == '/home-page' || router.pathname == "/" )? 'items':'item'}  >
                         <Link href = {{
                              pathname :"/"
                              }}>
                              Trang Chủ
                         </Link>
                    </li>
                    <li className = {router.pathname == '/movie-theater' ? 'items':'item'} >
                         <Link href = {{
                              pathname : "/movie-theater",
                              }}>
                              Phim Chiếu Rạp
                         </Link>
                    </li>
                    <li  className = {router.pathname == '/cartoon' ? 'items':'item'} >
                         <Link href = {{
                              pathname : "/cartoon",
                              }}>
                              Phim Hoạt Hình
                         </Link>
                    </li>
                    <li  className = {router.pathname == '/rank-movie' ? 'items':'item'} >
                         <Link href = {{
                              pathname : "/rank-movie",
                              }}>
                              Bảng Xếp Hạng
                         </Link>
                    </li>
                    <li  className = {router.pathname == '/list-actor' ? 'items':'item'} >
                         <Link href = {{
                              pathname : "/list-actor",
                              }}>
                              Diển Viên
                         </Link>
                    </li>
               </ul>
               <input
                    type = "text"
                    className = "input-body" 
                    placeholder="Tìm Kiếm "
                    value = {searchTxt}
                    onChange = {(e:any) => setSearchTxt(e.target.value)}
                    onKeyPress = {event => {
                         if(event.key === 'Enter'){
                              handleSearch()
                         }
                    }}
               ></input>
               <button
                    className = "button-body"
                    onClick={handleSearch}
                    ><AiOutlineSearch style={{"position":"relative","top":"3px"}} /></button>
               <button className="login" onClick={() => {
                    router.push({
                         pathname:"/login"
                    })
               }}>Đăng Nhập</button>
               <style jsx>{`
               .navbar {
                    overflow: hidden;
                    background-color: black;
                    position: fixed; 
                    top: 0; 
                    width: 100%; 
               }
               .navbar ul li {
                    float: left;
                    display: block;
                    color: #f2f2f2;
                    text-align: center;
                    padding: 5px;
                    text-decoration: none;
                    margin-left:30px;
                    font-size: 18px
               }
               .items{
                    float: left;
                    list-style: none;
                    border-bottom:3px solid white;
               }
               .input-body{
                    border: 1px solid grey;
                    outline:none;
                    height:35px;
                    width:300px;
                    border-radius:10px;
                    background:#F0F0F0;
                    text-align:center;
                    position: relative;
                    left:220px;
                    bottom:4px;
               }
               .button-body{
                    border: none;
                    outline:none;
                    height:33px;
                    border-radius:10px;
                    cursor:pointer;
                    font-size:20px;
                    background:#F0F0F0;
                    position: relative;
                    left:185px;
               }
               ::placeholder {
                    text-align:center;
               }
               .login{
                    height:35px;
                    width:100px;
                    background-color:red;
                    color:white;
                    font-size:15px;
                    border-radius:10px;
                    cursor:pointer;
                    position: relative;
                    left:220px;
                    bottom:4px;
               }
               {/* @media(min-width: 768px) and (max-width:1023px){
                    .navbar ul li {
                         float: none;
                         display: block;
                         text-align: left;
                         width: 100%;
                         margin: 0;
                         
                    }
               } */}
               `}</style>
          </div>  
     )
}
export default Header;