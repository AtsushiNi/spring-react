CREATE TABLE IF NOT EXISTS users (
    id BIGINT PRIMARY KEY,
    user_name VARCHAR(255),
    division VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS csv_files (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    file_name VARCHAR(255), -- サーバーに保存されているファイル名
    original_file_name VARCHAR(255), -- アップロードされたファイル名
    upload_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);