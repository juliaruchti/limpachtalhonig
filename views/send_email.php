



<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve form data
    $firstname = htmlspecialchars($_POST['firstname']);
    $lastname = htmlspecialchars($_POST['lastname']);
    $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
    $message = htmlspecialchars($_POST['message']);
    
    // Validate required fields
    if (empty($firstname) || empty($lastname) || empty($email)) {
        die("Bitte fülle alle Pflichtfelder aus.");
    }

    // Email details
    $to = "julia29ruchti@gmail.com";
    $subject = "Neue Bestellung von $firstname $lastname";
    $body = "Vorname: $firstname\nNachname: $lastname\nE-Mail: $email\n\nText auf Geschenkset(s):\n$message";
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";

    // Send email
    if (mail($to, $subject, $body, $headers)) {
        echo "Vielen Dank! Deine Bestellung wurde erfolgreich gesendet.";
    } else {
        echo "Entschuldigung, es gab ein Problem beim Senden der E-Mail. Bitte versuche es später erneut.";
    }
} else {
    echo "Ungültige Anfrage.";
}
?>
