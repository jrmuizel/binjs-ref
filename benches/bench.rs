//! Encode a BinJS, then decode it, ensure that we obtain the same AST.

#[macro_use]
extern crate bencher;
extern crate binjs;

#[macro_use]
extern crate lazy_static;

use binjs::source::*;

const PATHS: &[&str] = &["tests/data/frameworks/angular.1.6.5.min.js"];

fn launch_shift() -> Shift {
    Shift::try_new().expect("Could not launch Shift")
}

lazy_static! {
    static ref SHIFT: Shift = launch_shift();
}

fn bench_parsing_one_parser_per_run(bencher: &mut bencher::Bencher) {
    bench_parsing_aux(None, bencher);
}

fn bench_parsing_reuse_parser(bencher: &mut bencher::Bencher) {
    bench_parsing_aux(Some(&SHIFT), bencher);
}

fn bench_parsing_aux(parser: Option<&Shift>, bencher: &mut bencher::Bencher) {
    bencher.iter(move || {
        for &path in PATHS {
            let shift;

            bencher::black_box(
                match parser {
                    Some(parser) => parser,
                    None => {
                        shift = launch_shift();
                        &shift
                    }
                }
                .parse_file(path)
                .expect("Could not parse source"),
            );
        }
    });
}

benchmark_group!(
    bench,
    bench_parsing_one_parser_per_run,
    bench_parsing_reuse_parser
);
benchmark_main!(bench);
