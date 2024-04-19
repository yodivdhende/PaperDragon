use sheets4::{hyper, hyper_rustls};

pub fn http_client() -> hyper::Client<hyper_rustls::HttpConnector<hyper::client::HttpConnector>> {
    return hyper::Client::builder().build(
        hyper_rustls::HttpConnectorBuilder::new()
            .with_native_roorts()
            .http_only()
            .enable_http1()
            .enable_http2()
            .built(),
    );
}
