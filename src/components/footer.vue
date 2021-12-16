<template>
  <div class="footer">
    <div class="footer-content">
      <h3>TORFL by SovietSoda</h3>
      <p>
        Thank you for your interest in our online test site! Choose your audience from the list below for the correct contact information. !
      </p>
      <ul class="socials">
        <li>
          <a href="#"><i class="fa fa-facebook"></i></a>
        </li>
        <li>
          <a href="#"><i class="fa fa-youtube"></i></a>
        </li>
        <li>
          <a href="#"><i class="fa fa-twitter"></i></a>
        </li>
      </ul>
    </div>
  </div>
</template>

<style>
/* .footer{
        height: 120px;
        background: black;
        color: white;
        border-top: 2px solid #111111
    } */
* {
  margin: 0;
  padding: 0;
}
.footer {
  background: black;
  padding-top: 40px;
  color: #fff;
  padding: 3em 2em 2em;
}
.footer-content {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
}
.footer-content h3 {
  font-size: 2em;
  font-weight: 400;
}
.footer-content p {
  max-width: 500px;
  margin: 20px 0;
  line-height: 28px;
  font-size: 1em;
}
.socials {
  width: 250px;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0em 1em 0em 1em;
}
.socials li {
  
  margin: 0 15px;
}
.socials a {
  text-decoration: none;
  color: #fff;
}
.socials a i {
  font-size: 2em;
  transition: 0.4s;
}
.socials a:hover i {
  color: #b30000;
}

</style>
