<template>
  <html lang="">
    <div class="body">
      <div class="logincontent">
        <table class="loginbox">
          <tr class="form-group">
            <th><label for="username" class="label">Username</label></th>
            <th><input type="text" x-moz-errormessage="Please specify login." class="input"></th>
          </tr>
          <tr class="form-group">
            <th><label for="email" class="label">Email</label></th>
            <th><input type="email" x-moz-errormessage="Please specify a valid email address." class="input"></th>
          </tr>
          <tr class="form-group">
            <th><label for="password" class="label">Password</label></th>
            <th><input type="password" x-moz-errormessage="Please specify a valid password." class="input"></th>
          </tr>

          <tr class="form-group">
            <th><button class="btn btn-primary btn-block" id="loginbtn" :disabled="loading">
              <span
                v-show="loading"
                class="spinner-border spinner-border-sm"
              ></span>
              Sign&nbsp;Up
            </button></th>
          </tr>
        </table>
      </div>
      <navbar />
      <section>
        <img src="@/assets/LikBez_Cover.jpg" alt="" class="BG_Picture" />
      </section>
      <div class="logincontentalt">
        <table class="loginbox">
          <tr class="form-group">
            <th><label for="username" class="label">Username</label></th>
            <th><input type="text" x-moz-errormessage="Please specify login." class="input"></th>
          </tr>
          <tr class="form-group">
            <th><label for="email" class="label">Email</label></th>
            <th><input type="email" x-moz-errormessage="Please specify a valid email address." class="input"></th>
          </tr>
          <tr class="form-group">
            <th><label for="password" class="label">Password</label></th>
            <th><input type="password" x-moz-errormessage="Please specify a valid password." class="input"></th>
          </tr>

          <tr class="form-group">
            <th><button class="btn btn-primary btn-block" id="loginbtn" :disabled="loading">
              <span
                v-show="loading"
                class="spinner-border spinner-border-sm"
              ></span>
              Sign&nbsp;Up
            </button></th>
          </tr>
        </table>
      </div>
    </div>
    <footervue />
  </html>
</template>

<script>
import navbar from "@/components/navbar.vue";
import footervue from "@/components/footer.vue";

export default {
  name: "Login",
  props: {
    msg: String,
  },
  components: {
    navbar,
    footervue,
  },
};
</script>

<style>
.logincontent{
  width: 100%;
  position: absolute;
  display:flex;
  justify-content: center;
  
  background: rgba(179, 0, 0, 0.5);
  top: 25%;
  z-index: 1;
}
.logincontentalt{
  display:none;
}
.loginbox {
  width: 40%;
  height: 200px;

  background: rgba(10, 10, 10, 0.4);
  padding: 20px 0 20px 0;
}
.form-group *{
  margin: 0.5em 1em;
}
.form-group .label{
   color:white;
   font-size: 1em;
}
.form-group .input{
  margin:0;
    padding:0;
    box-sizing: border-box;
    text-decoration: none;
    outline:none;

   background: white;
   border: 1px solid #2B2B2B;
   height: 2em;
   font-size: 1em;
   padding: 0 5px;
}
.form-group .input:focus{
   border: 1px solid #7f0000;
}
#loginbtn{
  border-style: none;
  border: 1px solid transparent;
  outline-style: none;
  background: white;
  font-size: 1em;
  padding: 5px 10px;
}
#loginbtn:hover{
  background: black;
  color:white;
  border: 1px solid white;
}
#loginbtn:active{
  background: #b30000;
  color:white;
  border: 1px solid white;
}
@media (max-width: 856px) and (min-width: 485px)
{
  /* .loginfiller{
    width: 100%;
    min-height:px;
    background:black;
  } */
  .logincontent{
    display:none;
  }
  .logincontentalt{
    display:initial;
    position: relative;
    padding: 15% 0 15% 0;
    width: 100%;
  display:flex;
  justify-content: center;
  
  background: rgba(0, 0, 0, 1);
  z-index: 0;
  }
  .loginbox {
  width: 40%;
  height: 200px;

  background: rgba(179, 0, 0, 0.5);
  padding: 20px 0 20px 0;
  }

}
  @media (max-width: 485px)
{
  .logincontent{
    display:none;
  }
  .logincontentalt{
    display:initial;
    position: relative;
    padding: 25% 0 25% 0;
    width: 100%;
  display:flex;
  justify-content: center;
  
  background: rgba(0, 0, 0, 1);
  z-index: 0;
  }
  .loginbox {
  width: 35%;
  height: 200px;

  background: rgba(179, 0, 0, 0.5);
  padding: 20px 0 20px 0;
  }

}
</style>
