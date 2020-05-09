// TODO: Need update this mapping.
// Get CodeMirror style code by Language name
function getStyleCodeByLanguageName(name) {
	var dic = {
		"APL": "apl",
		"ASN.1": "asn.1",
		"Asterisk dialplan": "asterisk dialplan",
		"Brainfuck": "brainfuck",
		"C": "c, c++, c#",
		"C++": "c, c++, c#",
		"C#": "c, c++, c#",
		"Ceylon": "ceylon",
		"Clojure": "clojure",
		"Closure Stylesheets (GSS)": "closure stylesheets (gss)",
		"CMake": "cmake",
		"COBOL": "cobol",
		"CoffeeScript": "coffeescript",
		"Common Lisp": "common lisp",
		"Crystal": "crystal",
		"CSS": "css",
		"Cypher": "cypher",
		"Cython": "text/x-cython",
		"D": "d",
		"Dart": "dart ",
		"Django (templating language)": "django (templating language) ",
		"Dockerfile": "dockerfile ",
		"diff": "diff ",
		"DTD": "dtd",
		"Dylan": "dylan",
		"EBNF": "ebnf ",
		"ECL": "ecl",
		"Eiffel": "eiffel",
		"Elixir": "elixir",
		"Elm": "elm",
		"Erlang": "erlang",
		"Factor": "factor",
		"FCL": "fcl",
		"Forth": "forth",
		"Fortran": "fortran",
		"F#": "f#",
		"Gas (AT&T-style assembly)": "gas (at&t-style assembly)",
		"Gherkin": "gherkin",
		"Go": "go",
		"Groovy": "groovy",
		"HAML": "haml ",
		"Handlebars": "handlebars ",
		"Haskell (Literate)": "haskell (literate)",
		"Haxe": "haxe ",
		"HTML embedded (JSP, ASP.NET)": "html embedded (jsp, asp.net) ",
		"HTML mixed-mode": "html mixed-mode",
		"HTTP": "http ",
		"IDL": "idl",
		"Java": "text/x-java",
		"JavaScript (JSX)": "javascript",
		"Jinja2": "jinja2",
		"Julia": "julia",
		"Kotlin": "kotlin",
		"LESS": "less ",
		"LiveScript": "livescript ",
		"Lua": "lua",
		"Markdown (GitHub-flavour)": "markdown (github-flavour)",
		"Mathematica": "mathematica",
		"mbox": "mbox ",
		"mIRC": "mirc ",
		"Modelica": "modelica",
		"MscGen": "mscgen",
		"MUMPS": "mumps",
		"Nginx": "nginx",
		"NSIS": "nsis ",
		"N-Triples/N-Quads": "n-triples/n-quads",
		"Objective C": "objective c",
		"OCaml": "ocaml",
		"Octave (MATLAB)": "octave (matlab)",
		"Oz": "oz",
		"Pascal": "pascal",
		"PEG.js": "peg.js",
		"Perl": "perl ",
		"PGP (ASCII armor)": "pgp (ascii armor)",
		"PHP": "php",
		"Pig Latin": "pig latin",
		"PowerShell": "powershell ",
		"Properties files": "properties files ",
		"ProtoBuf": "protobuf",
		"Pug": "pug",
		"Puppet": "puppet",
		"Python": "python",
		"Q": "q",
		"R": "r",
		"RPM": "rpm",
		"reStructuredText": "restructuredtext ",
		"Ruby": "ruby ",
		"Rust": "rust ",
		"SAS": "sas",
		"Sass": "sass ",
		"Spreadsheet": "spreadsheet",
		"Scala": "scala",
		"Scheme": "scheme",
		"SCSS": "scss ",
		"Shell": "shell",
		"Sieve": "sieve",
		"Slim": "slim ",
		"Smalltalk": "smalltalk",
		"Smarty": "smarty",
		"Solr": "solr ",
		"Soy": "soy",
		"Stylus": "stylus",
		"SQL (several dialects)": "sql (several dialects) ",
		"SPARQL": "sparql",
		"Squirrel": "squirrel",
		"Swift": "swift",
		"sTeX, LaTeX": "stex, latex",
		"Tcl": "tcl",
		"Textile": "textile",
		"Tiddlywiki": "tiddlywiki ",
		"Tiki wiki": "tiki wiki",
		"TOML": "toml ",
		"Tornado (templating language)": "tornado (templating language)",
		"troff (for manpages)": "troff (for manpages)",
		"TTCN": "ttcn ",
		"TTCN Configuration": "ttcn configuration",
		"Turtle": "turtle",
		"Twig": "twig ",
		"VB.NET": "vb.net",
		"VBScript": "vbscript",
		"Velocity": "velocity",
		"Verilog/SystemVerilog": "verilog/systemverilog",
		"VHDL": "vhdl ",
		"Vue.js app": "vue.js app ",
		"Web IDL": "web idl",
		"XML/HTML": "xml/html",
		"XQuery": "xquery",
		"Yacas": "yacas",
		"YAML": "yaml ",
		"YAML frontmatter": "yaml frontmatter ",
		"Z80": "z80"
	};
	return dic[name];
};
