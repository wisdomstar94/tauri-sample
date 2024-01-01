// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]
fn main() {
  dotenv().ok();

  tauri::Builder::default()
    .invoke_handler(tauri::generate_handler![greet])
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}

use dotenv::dotenv;

#[tauri::command]
fn greet(name: &str, age: u32) -> String {
  let api_token = std::env::var("API_TOKEN").expect("API_TOKEN must be set.");
  println!("api_token is {}", api_token);
  format!("Hello, {}! your age is {}", name, age)
}