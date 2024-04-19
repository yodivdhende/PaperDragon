pub struct Config {
    pub priv_key: String,
    pub sheet_id: String,
    pub deposit_range_input: String,
}

impl Config {
    pub fn new() -> Config {
        Config {
            priv_key: String::from("priv_key.json"), //TODO: create this file with gooogle cloude service
            sheet_id: String::from("sheet_id"),      //TODO: fillin sheetId
            deposit_range_input: String::from("Deposit Stream!A2:B"), //TODO Fill in with range
        }
    }
}
