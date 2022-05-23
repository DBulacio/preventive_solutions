<nav class="navbar navbar-expand-lg sticky-top">
    <div class="container-fluid">
        <!-- Logo -->
        <a tabindex="-1" class="navbar-brand" target="_self" href="index.php">
            <img class="main-logo" src="img/logo.png" alt="Logo de la empresa" loading="lazy"/>
        </a>
        <!-- Collapse Menu -->
        <button class="navbar-toggler custom-toggler" type="button" data-toggle="collapse" data-target="#PSNavbar" aria-controls="PSNavbar" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon custom-toggler"></span>
        </button>

        <!-- Menu -->
        <div class="collapse navbar-collapse" id="PSNavbar"> 
            <ul class="navbar-nav mr-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <a tabindex="-1" id="txt-home" class="myNav nav-link text-white" href="#home">HOME</a>
                </li>
                <li class="nav-item">
                    <a tabindex="-1" id="txt-about" class="myNav nav-link text-white" href="#about">ABOUT</a>
                </li>
                <li class="nav-item">
                    <a tabindex="-1" id="txt-services" class="myNav nav-link text-white" href="#services" target="_self">SERVICES</a>
                </li>
                <li class="nav-item">
                    <a tabindex="-1" id="txt-contact" class="myNav nav-link text-white" href="#contact" target="_self">CONTACT</a>
                </li>
            </ul>

            <ul class="navbar-redes navbar-nav text-white hide-on-mobile">
                <!-- RRSS -->
                <li class="menu">
                    <a tabindex="-1" href="https://api.whatsapp.com/send?phone=1(786)7191538&text=Hello!%20I'd%20like%20some%20information%20please." class="nav-link rounded" id="whatsapp" target="_blank"><i class="fab fa-whatsapp"></i> <span class="hide-text-on-mobile"> +1 (786) 719-1538 </span></a>
                </li>
                <li class="menu">
                    <a tabindex="-1" class="nav-link redes" id="instagram" href="https://www.instagram.com/preventivesolutionsmiami/" rel="nofollow" target="_blank">
                        <i class="fab fa-instagram"></i>
                    </a>
                </li>
            </ul>

            <ul class="navbar-nav">
                <label class="switch">
                    <input type="checkbox" id="togBtn">
                    <div class="slider round">
                        <span language='spanish' class="on"></span>
                        <span language='english' class="off"></span>
                    </div>
                </label>
            </ul>
        </div>
    </div>
</nav>
<script src="js/language_switch.js"></script>
