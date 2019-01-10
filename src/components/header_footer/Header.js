import React, { Component } from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';

/*makes SideDrawer son of Header */
import SideDrawer from './SideDrawer'

class Header extends Component {

    state = {drawerOpen: false, headerShow: false}

    /*note (addEventListener) to program check if the user scroll the page (vanilla javascript method)*/
    componentDidMount(){
        window.addEventListener('scroll', this.handleScroll);
    }

    /*func change state of headerShow when the user scrolling the page */
    handleScroll = () => {
        if(window.scrollY > 0){this.setState({headerShow:true})} 
        else{this.setState({headerShow:false})}
    }

    /*func gets boolean value and change state to open(true) or close(false) the drawer */
    toggleDrawer = (value) => {
        this.setState({drawerOpen: value})
    }

    render() {
        return (
                <AppBar position="fixed" style={{backgroundColor:this.state.headerShow ? '#2f2f2f' : 'transparent' ,boxShadow:'none',padding: '10px 0px'}}>
                    <Toolbar>
                        <div className="header_logo">
                            <div className="font_righteous header_logo_venue">Park Hayarkon</div>
                            <div className="header_logo_title">Musical Events</div>
                        </div>
                        
                        <IconButton aria-label="Menu" color="inherit" onClick={()=> this.toggleDrawer(true)}>
                            <MenuIcon></MenuIcon>
                        </IconButton>

                            <SideDrawer open={this.state.drawerOpen} onClose={(value)=> this.toggleDrawer(value)}/>

                    </Toolbar>
                </AppBar>
        );
    }
}

export default Header;