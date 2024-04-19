use Sheets4::{api::ValueRange, hyper, hyper_rustls, Error, Sheets};

use crate::config::Config;

pub async fn read(
    hub: &Sheet<hyper_rustls::HttpConnector<hyper::client::HttpConnector>>,
    config: &Config,
) -> Result<(hyper::Reponse<hyper::Body>, ValueRange), Error> {
    return hub
        .spreadsheets()
        .values_get(&config.sheet_id, &config.deposit_range_input)
        .doit()
        .await;
}
