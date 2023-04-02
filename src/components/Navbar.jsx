import {Search, ShoppingCartOutlined } from '@mui/icons-material'
import { Badge } from '@mui/material'
import React from 'react'
import styles from './Navbar.module.css';

const NavBar = () => {
    return (
      <div className={styles.Container}>
        <div className={styles.Wrapper}>
          <div className={styles.Left}>
            <span className={styles.Language}>EN</span>
            <div className={styles.SearchContainer}>
              <input className={styles.Input} />
              <Search style={{color:"gray", fontSize:16}} />
            </div>
          </div>
          <div className={styles.Center}>
            <h1 className={styles.Logo}>FL Automations</h1>
          </div>
          <div className={styles.Right}>
            <div className={styles.MenuItem}><p>REGISTER</p></div>
            <div className={styles.MenuItem}><a href ={"/login"}>SIGN IN</a></div>
            <div className={styles.MenuItem}>
              <Badge badgeContent={5} color="primary" style={{  transform: 'translate(20px, -20px)'}}></Badge>
              <ShoppingCartOutlined></ShoppingCartOutlined>
            </div>
          </div>
        </div>
      </div>
    )
  }

export default NavBar   