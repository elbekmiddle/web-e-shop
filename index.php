<?php
    // JSON ma'lumotlarni olish
    $data = json_decode(file_get_contents('php://input'), true);

    // Olingan ma'lumotlarni qayta ishlash (masalan, admin paneliga yozish yoki saqlash)
    $cartItems = $data['cartItems'];
    $totalPrice = $data['totalPrice'];

    // Ma'lumotlarni log qilish (yoki ma'lumotlar bazasiga saqlash)
    file_put_contents('order_log.txt', print_r($cartItems, true));
    
    // Javob qaytarish
    echo json_encode(["status" => "success", "message" => "Order received"]);
?>