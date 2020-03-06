import React, { Component } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";

const styles = theme => ({
  main: {
    width: "auto",
    display: "block",
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme
      .spacing.unit * 3}px`
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", 
    marginTop: theme.spacing.unit
  },
  submit: {
    marginTop: theme.spacing.unit * 3
  }
});

class Sign extends Component {
  constructor(props) {
    super(props);
    this.state = {
        email: '',
        password: '',
        errors: {}
        };
    }

    handleEmailChange = evt => {
    this.setState({ email: evt.target.value });
    };

    handlePasswordChange = evt => {
    this.setState({ password: evt.target.value });
    };

    handleSubmit=() =>{
    const { email, password } = this.state;
    alert(`Signed up with Email Id: ${email} & Password: ${password}`);
    };

    render() {
        const { classes} = this.props;
        const { email, password } = this.state;
        const isEnabled = email.length > 0 && password.length > 0;
  
        return (
        
         <main className={classes.main}>
         <CssBaseline />
        <Paper className={classes.paper}>
          <Avatar className={classes.avatar}>
            {/* <LockIcon /> */}
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Typography variant="body1">
         
          </Typography>
          <form className={classes.form} action=" ">
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="email">Email Address</InputLabel>
              <Input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                value={this.state.email}
                autoFocus
                onChange={this.handleEmailChange}
              />
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="password">Password</InputLabel>
              <Input
                name="password"
                type="password"
                id="password"
                value={this.state.password}
                autoComplete="current-password"
                onChange={this.handlePasswordChange}
              />
            </FormControl>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={this.handleSubmit}
              disabled={!isEnabled}
            >
              Sign in
             
            </Button>
           
          </form>
        </Paper>
      </main>
      
    );
  }
}

export default (withStyles(styles)(Sign));
