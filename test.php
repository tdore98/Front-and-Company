<?php
    session_start();

    $_SESSION["url"] = "test";
    echo $_SESSION["url"];
?>