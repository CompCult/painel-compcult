import React from "react"
import logo from '../../../src/images/logo.png'
import './Login.css'

import { withStyles, makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


const CssTextField = withStyles({
    root: {
        '& label.Mui-focused': {
            color: 'white',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: 'white',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: 'white',
            },
            '&:hover fieldset': {
                borderColor: 'white',
            },
            '&.Mui-focused fieldset': {
                borderColor: 'white',
            },
        },
    },
})(TextField);

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        height: '70px',
        color: 'red'

    },

    margin: {
        margin: theme.spacing(1),
        width: '260px',

    },

    button: {
        margin: theme.spacing(1),
    },
    input: {
        display: 'none',
    },
}));

const Login = () => {
    const classes = useStyles();

    return (
        <div className='loginScreen'>

            <div id="Login">
                <img src={logo} className='logo' alt="logo" />

            </div>


            <div className='box'>

                <div className={classes.root}>
                    <CssTextField
                        className={classes.margin}
                        label="Login"
                        variant="outlined"
                        id="custom-css-outlined-input"

                    />
                </div>

                <div className={classes.root}>
                    <CssTextField
                        className={classes.margin}
                        label="Senha"
                        variant="outlined"
                        id="custom-css-outlined-input"
                    />
                </div>

                <div>
                    <Button variant="contained" 
                        color="inherit" 
                        className={classes.button}>
                            Entrar
                    </ Button>

                </div>
            </div>

        </div>
    )
}

export default Login
