# slice-netd
A daemon for using hands-free slice-net for ray-userland!

# Installation
To install using NPM:
```
npm i slice-netd -g
```

# Usage
> Warning: Do not use `slice-netd` without proper instructions. Do not use it in the background without a way to kill it. Do not use it at startup, instead wait until we develop `ray-net`.

To establish a slice-net download plug from `192.168.1.116:4040` use the following:
```
slice-netd -d -ip 192.168.1.116 -p 4040
```
You will need to delete the shards manually since `slice-net` still dosen't support yet.

To kill the process if used in backgroup use something like `task-manager` or `htop` to send an exit signal like `SIGTERM` to `slice-netd`.

# LICENSE 
MIT License

Copyright (c) 2021 Ray Voice

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

