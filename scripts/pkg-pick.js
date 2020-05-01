const fs = require("fs-extra");
const path = require("path");
const pkg = require("../package.json");

const files = fs.readdirSync("./src");

const pkgFiles = ["*.md", "cjs", "esm", "lib"];

files.forEach(file => {
	if (!/\.(j|t)s$/.test(file)) {
		return;
	}
	const name = file.replace(/\.(j|t)s$/, "");

	if (name === "index") return;

	pkgFiles.push(name);

	const data = {
		name: `${pkg.name}/${name}`,
		private: true,
		main: `../cjs/${name}.js`,
		module: `../esm/${name}.js`,
		types: `../lib/${name}.d.ts`,
	};

	fs.ensureDirSync(`./${name}`);
	fs.writeFileSync(`./${name}/package.json`, JSON.stringify(data, null, 2));
});

pkg.files = pkgFiles;

fs.writeFileSync(`./package.json`, JSON.stringify(pkg, null, 2));

console.log("build completed.");
