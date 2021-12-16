
<template>
    <header id="navbar"> 
            <div>
                <a href="/" class="navLogoBig">TORFL · ТРКИ</a>
            </div>
            <nav>
                <ul>
                    <li class="navLogoSmall"><span>TORFL</span></li>
                    <router-link to="/" class="navLink" tag="li"><span>Home</span></router-link>
                    <router-link to="/about/" class="navLink" tag="li"><span>About</span></router-link>
                    <router-link to="/login/" class="navLink" tag="li"><span>Login</span></router-link>
                </ul>
            </nav>
    </header>
</template>


<script type="text/javascript">
    window.addEventListener("scroll", function(){
        var header = document.querySelector("header");
        //Добавляем хидеру класс variation если скроллим вниз. 
        //После в стилях мы этот класс опишем
        header.classList.toggle("variation", window.scrollY > 0)
    })
</script>


<style>
*{
    margin:0;
    padding:0;
    box-sizing: border-box;
    text-decoration: none;
}

#navbar{
    background-color: rgba(0, 0, 0, 0.4);
    position: fixed;
    top:0;
    left:0;
    width:100%;
    display: flex;
    justify-content: space-between;
    /* align-items: center; */
    transition: 0.3s;
    padding: 25px 6em;
    z-index: 1;
    text-align: center;
}
#navbar.variation{
    padding: 5px 6em;
    background-color: white;
    border-bottom: 1px solid rgba(77, 77, 77, 0.2);
}
#navbar .navLogoBig
{
    content: "TORFL · ТРКИ";
    position: relative;
    font-weight: 700;
    color:white;
    font-size: 2em;
    letter-spacing: 4px;
}
#navbar ul{
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 0em;
}
#navbar ul .navLogoSmall{
    display:none;
    color:white;
    font-size: 1.5em;
    padding: 5px 5px;
    position: relative;
    letter-spacing: 1px;
    font-weight: 500;
    transition: 0.6s;
}
#navbar ul li{
    width: 100px;
    color: white;
    list-style: none;
    font-size: 1em;
    padding: 5px 5px;
    margin: 5px 10px;
    position: relative;
    letter-spacing: 1px;
    font-weight: 500;
    transition: 0.0s;
    cursor: pointer;
}
#navbar ul .navLink:hover{
    border-bottom: 1px solid white;
    transition: 0.0s;
}
#navbar ul li.router-link-exact-active{
    border-bottom: 1px solid white;
    color:white;
}
#navbar.variation .navLogoBig, #navbar.variation ul li{
    color:black;
}
#navbar.variation ul li.navLink:hover{
    background:black;
    color:white;
}
#navbar.variation ul li.navLink a:active{
    background:#b30000;
    color:white;
    transition: 0.0s;
}
#navbar.variation ul li.navLogoSmall{
   color: black;
}

#navbar.variation ul li.router-link-exact-active{
    color:white;
    background:#b30000;
}
/* and (min-width: 578px) */
@media (max-width: 856px) and (min-width: 485px)
{
    #navbar{
        display: block;
        padding: 1em 1em;
    }
    #navbar.variation{
        padding: 1em 1em;
    }
    #navbar .navLogoBig
    {  
        display: none;
    }
    #navbar > *
    {
        text-align: center;
    }
    #navbar ul li{
        width: 85px;
    }
    #navbar ul li.navLogoSmall{
        display:inline;
        font-weight: 700;
        cursor:no-drop;
    }
}
@media (max-width: 485px)
{
    #navbar{
        display: block;
        padding: 5px 0em;
    }
    #navbar.variation{
        padding: 5px 0em;
    }
    #navbar .navLogoBig
    {  
        display: none;
    }
    #navbar > *
    {
        text-align: center;
    }
    #navbar ul{
        display:flex;
        justify-content: space-around;
    }
    #navbar ul li{
        width: 100px;
    }
    #navbar ul li.navLogoSmall{
        display:none;
    }
    #navbar.variation ul li a:active{
        background:black;
        color:white;
        transition: 0.0s;
    }
}
</style>
