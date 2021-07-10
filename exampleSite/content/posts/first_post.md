---
title: "First Post"
date: 2021-05-15T23:39:49+05:30
tags: ["abc", "def"]
type: post
---

Yo yo yo

# This is a heading

- And
- this
- is
- a
- list

1. This 
2. is 
3. a 
4. numbered 
5. list

> And this is a really really really really really long blockquote which spans across multple lines

One importnant thing to keep in mind is that using multi-stage will not impact the build time of your container, the time difference between the build times is negligible

| Language     | Normal  | Multi-Stage |
|-------|----------------|-------|
| Python | 274 MB           | 84.5 MB    |
| Golang    | 829 MB            | 15.3MB     |

Multi-stage builds are useful where space is a constraint, and whilst it is always better to build small concise containers, it is easy to get carried away trying to shave off a few megabytes. Even though they are great to use, they shouldn’t be abused, the effort should always spent be towards improving the workflow.

```py
# Codeblocks look like this

def print():
    print('Hello world!')
```

```golang
package main

import (
    "fmt"
)

// This is a comment
func main () {
    fmt.Println("Hello, world!")
}
```

```bash
PATH=$HOME

cat $HOME/file.txt | while read -n data; do
    echo $data
done
```
