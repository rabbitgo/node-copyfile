
var fs = require('fs'),
	path = require('path');


exports.file = function(config){
	var sourceDir,
	descDir,
	filename;

	if(!!config.sourceDir || config.descDir || !!config.filename){
		console.log('config has something wrong, you must set a value');
	}

	sourceDir = config.sourceDir,
	descDir = config.descDir,
	filename = config.filename;

	if(!!config.dev){
		var dirPath = path.dirname(Object.keys(require.cache)[0]);
		sourceDir = dirPath;
		descDir = dirPath + '/test/';
		filename = 'readme.txt';
	}

	return {
		watch:function(){
			//examize descDir
			fs.exists(descDir, function(exists){
				if(!exists){
					console.log(descDir);
					fs.mkdirSync(descDir, 0755);
				}
			});

			var sourceFile = path.join(sourceDir, filename),
				descFile = path.join(descDir, filename);
				console.log(sourceFile);
				console.log(descFile);

			fs.watchFile(sourceFile, function(curr , prev){
				var currTime = curr.mtime.getTime(),
					prevTime = prev.mtime.getTime();

				if(currTime - prevTime){
					console.log('asf');
				}else{
					console.log('文件未发生变更');
				}
			});
		}
	};
}