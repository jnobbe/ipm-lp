<?php

    $parmlist = "elqFormName=EOYCampaign&elqSiteID=3079";
    $parmlist .= "&elqCustomerGUID=''";
    $parmlist .= "&C_EmailAddress=".$_POST['email'];
    $parmlist .= "&C_First=".$_POST['firstName'];
    $parmlist .= "&C_Last=".$_POST['lastName'];

    $header = array("MIME-Version: 1.0","Content-type: application/x-www-form-urlencoded","Contenttransfer-encoding: text"); 
    
    $url = "http://now.eloqua.com/e/f2.aspx";   
    
    $ch = curl_init(); 
        
    // set URL and other appropriate options 
    curl_setopt($ch, CURLOPT_URL, $url); 
    curl_setopt($ch, CURLOPT_VERBOSE, 1); 
    curl_setopt ($ch, CURLOPT_PROXYTYPE, CURLPROXY_HTTP); 
    curl_setopt($ch, CURLOPT_HTTPHEADER, $header); 
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, FALSE); 
    curl_setopt($ch, CURLOPT_POST, true); 
    curl_setopt($ch, CURLOPT_POSTFIELDS, $parmlist); 
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true); 
    curl_setopt($ch, CURLOPT_TIMEOUT, 10); 
    
    $response = curl_exec($ch); 
    if (trim($response) == '') {
        echo '';
    } else {
        echo 'error';
    }
    
    // close curl resource, and free up system resources 
    curl_close($ch);    
    
    exit(); 

?>