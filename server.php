<?php

$filename = 'users.json';

function loadUsers() {
    global $filename;
    if (file_exists($filename)) {
        $data = file_get_contents($filename);
        return json_decode($data, true);
    } else {
        return ["users" => []];
    }
}

function saveUsers($data) {
    global $filename;
    file_put_contents($filename, json_encode($data, JSON_PRETTY_PRINT));
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $input = json_decode(file_get_contents('php://input'), true);

    if (isset($input['action']) && $input['action'] === 'register') {
        $users = loadUsers();
        foreach ($users['users'] as $user) {
            if ($user['username'] === $input['username']) {
                echo json_encode(["status" => "error", "message" => "Користувач уже існує"]);
                exit;
            }
        }

        $users['users'][] = [
            "username" => $input['username'],
            "password" => $input['password']
        ];
        saveUsers($users);
        echo json_encode(["status" => "success", "message" => "Реєстрація успішна"]);
    } elseif (isset($input['action']) && $input['action'] === 'login') {
        $users = loadUsers();
        foreach ($users['users'] as $user) {
            if ($user['username'] === $input['username'] && $user['password'] === $input['password']) {
                echo json_encode(["status" => "success", "message" => "Авторизація успішна"]);
                exit;
            }
        }
        echo json_encode(["status" => "error", "message" => "Неправильний логін або пароль"]);
    }
}
