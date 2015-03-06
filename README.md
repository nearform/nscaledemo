#nscaledemo

Hello world project for nscale.

##overview
nscaledemo is a minimalist nscale sytem definition defining just one hello world web service and consists of the following files:

###system.js
```js
exports.name = 'nscaledemo';
exports.namespace = 'nscaledemo';
exports.id = 'e1144711-47bb-5931-9117-94f01dd20f6f';

exports.topology = {
  development: {
    root: ['web']
  }
};

```
	
Defines the system namespace, name and id. Also defines a simple topology for local deployment.

#### definitions/services.js
```js
exports.root = {
  type: 'blank-container'
};

exports.web = {
  type: 'docker',
  specific: {
    repositoryUrl: 'git@github.com:nearform/nscaledemoweb.git',
    execute: {
      args: '-p 8000:8000 -d',
      exec: 'node index.js'
    }
  }
};

```

Defines a root container and a web container to hold the hello world application.

###map.js

	exports.types = {
		local: {}
	};

	exports.ids = {
  		local: {
    		root: { id: '85d99b2c-06d0-5485-9501-4d4ed429799c' },
    		web: {name: 'web'},
  		}
	};

Holds minimal id and name mapping for the web service container.
 
###generated files
The following files are generated and managed by nscale:

`<target-name>.json` - compiled system definition, built from system.js and files underneath the services repo

# usage
Full instructions on how to build and run nscaledemo are available in the nscale workshops here: https://github.com/nearform/nscale-workshop
