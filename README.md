# name-generator
A random name generator for projects, servers, cluster nodes etc in Typescript.

## Install
```
 npm i -D server-name-generator
```

## Example

```
import {generate} from 'server-name-generator';

const clusterName:string = generate();

console.log(clusterName)
<!-- // icy moon -->

```