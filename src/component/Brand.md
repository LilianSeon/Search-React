Brand example:

```js
<Brand title="Brands" hits={[
  {
    "id": 5,
    "brand": "Wiko",
    "image": "data:image/png;base64,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",
    "objectID": "2920580",
    "_highlightResult": {
      "id": {
        "value": "5",
        "matchLevel": "none",
        "matchedWords": []
      },
      "brand": {
        "value": "Wiko",
        "matchLevel": "none",
        "matchedWords": []
      },
      "image": {
        "value": "data:image/png;base64,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",
        "matchLevel": "none",
        "matchedWords": []
      }
    }
  },
  {
    "id": 4,
    "brand": "Xiaomi",
    "image": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAh1BMVEX/ZwD/////awv/XQD/YwD/XwD/i0z/6t//1L3/5tz/zrX/n3b/WAD///3/eCv//fj/qof/gT3/dTD/dCD/18P/9O3/yK7/+PP/mWr/0br/bxL/cxr/kV//sIn/mm3/diL/wKL/gkP/p37/fTn/cyr/3M3/tpT/upv/j1X/oHL/sI//cAD/i1Kq+M8SAAADFElEQVR4nO3dbXOaQBiF4V13qZaClGLBt0ZTk6pp///vqySf3F1UHBg8T849k29reK6AOhpBpU9V5WGppLVcl1mNU6efWBk79Dw9ZM1o8SHcJxJ9dTbZ1sI4GXqQHksmWlVK6h6ss8tUlWboKXrNxOogeReeduJcyXuaOG8z9AC9Nxp6gN6jED8K8aMQPwrxoxA/CvGjED8K8aMQPwrxoxA/CvGjED8K8aMQPwrxoxA/CvGjED8K8aMQPwrxoxA/CvGjED8K8aMQPwrxoxA/Cv1sR929tb6F9ksXPe9eRtZEV6e1uX/TlsS2QhPrjsrGr3/y5DIyegvcsOVJr22F0bgr4XvVvrg0r5kEbvMVSqh1WqpItvB0uB4bT5cXItR61vQAKUaox5swUY5QV9PgnVGQUKfT0F6UJNTVKkAUJQwOLkuot/7kwoR65x2n0oSv3ujShPqfuxPFCWfu7OKEqTuNOKE+Oofpwwirw8uPm8oPb7PqgjB2hn8YYZzc/O5MZNTxZ6Nw7LyOehxhq21Gyb6RKEN4GnzdJPx7fkeEFSozbxDmUoSqvtpfqLUYobLhh5snOcLoV1D4TY5QGfnCmXRh+DCVJLTB50RRwhxbeP3ffnaaAgut2hRuK+ctX2ihnWapl78IWBh9D6zR6fnrBoHCjEIKKaSQQgoppJBCCimkkEIKKaSQQgoppJBCCimkkEIKKaSQQgoppJBCCimkkEIKKaSQwo8WjjB03Rz/86WhRbcIx/0KTRnY5u/zTzjb59Dw7km+NvS3cq4dETxlYdt8PZsuhMrucjfvkha28NbkubdI+WsKb5G/Nf+s/ct1cq2vW9YE5rrzN7Wcl9drw49C/CjEj0L8KMSPQvwoxI9C/CjEj0L8KMSPQvwoxI9C/CjEj0L8KMSPQvwoxI9C/CjEj0L8KMSPQvwoxI9C/CjEj0L8KMSPQvw+g3A59Ag9t1GHtqe7YWWfVHnHVxkBZRYqG0neibZIlV4k1xfClsy00nqbSN2LNil1LdSTpZFotGZVf0FfLdRZPC9G0trMF+8XNfgPweRcBP/fnf8AAAAASUVORK5CYII=",
    "objectID": "2920570",
    "_highlightResult": {
      "id": {
        "value": "4",
        "matchLevel": "none",
        "matchedWords": []
      },
      "brand": {
        "value": "Xiaomi",
        "matchLevel": "none",
        "matchedWords": []
      },
      "image": {
        "value": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAh1BMVEX/ZwD/////awv/XQD/YwD/XwD/i0z/6t//1L3/5tz/zrX/n3b/WAD///3/eCv//fj/qof/gT3/dTD/dCD/18P/9O3/yK7/+PP/mWr/0br/bxL/cxr/kV//sIn/mm3/diL/wKL/gkP/p37/fTn/cyr/3M3/tpT/upv/j1X/oHL/sI//cAD/i1Kq+M8SAAADFElEQVR4nO3dbXOaQBiF4V13qZaClGLBt0ZTk6pp///vqySf3F1UHBg8T849k29reK6AOhpBpU9V5WGppLVcl1mNU6efWBk79Dw9ZM1o8SHcJxJ9dTbZ1sI4GXqQHksmWlVK6h6ss8tUlWboKXrNxOogeReeduJcyXuaOG8z9AC9Nxp6gN6jED8K8aMQPwrxoxA/CvGjED8K8aMQPwrxoxA/CvGjED8K8aMQPwrxoxA/CvGjED8K8aMQPwrxoxA/CvGjED8K8aMQPwrxoxA/Cv1sR929tb6F9ksXPe9eRtZEV6e1uX/TlsS2QhPrjsrGr3/y5DIyegvcsOVJr22F0bgr4XvVvrg0r5kEbvMVSqh1WqpItvB0uB4bT5cXItR61vQAKUaox5swUY5QV9PgnVGQUKfT0F6UJNTVKkAUJQwOLkuot/7kwoR65x2n0oSv3ujShPqfuxPFCWfu7OKEqTuNOKE+Oofpwwirw8uPm8oPb7PqgjB2hn8YYZzc/O5MZNTxZ6Nw7LyOehxhq21Gyb6RKEN4GnzdJPx7fkeEFSozbxDmUoSqvtpfqLUYobLhh5snOcLoV1D4TY5QGfnCmXRh+DCVJLTB50RRwhxbeP3ffnaaAgut2hRuK+ctX2ihnWapl78IWBh9D6zR6fnrBoHCjEIKKaSQQgoppJBCCimkkEIKKaSQQgoppJBCCimkkEIKKaSQQgoppJBCCimkkEIKKaSQwo8WjjB03Rz/86WhRbcIx/0KTRnY5u/zTzjb59Dw7km+NvS3cq4dETxlYdt8PZsuhMrucjfvkha28NbkubdI+WsKb5G/Nf+s/ct1cq2vW9YE5rrzN7Wcl9drw49C/CjEj0L8KMSPQvwoxI9C/CjEj0L8KMSPQvwoxI9C/CjEj0L8KMSPQvwoxI9C/CjEj0L8KMSPQvwoxI9C/CjEj0L8KMSPQvw+g3A59Ag9t1GHtqe7YWWfVHnHVxkBZRYqG0neibZIlV4k1xfClsy00nqbSN2LNil1LdSTpZFotGZVf0FfLdRZPC9G0trMF+8XNfgPweRcBP/fnf8AAAAASUVORK5CYII=",
        "matchLevel": "none",
        "matchedWords": []
      }
    }
  },
  {
    "id": 3,
    "brand": "Huawei",
    "image": "https://img.generation-nt.com/huawei-logo_109C058B01658325.jpg",
    "objectID": "2920560",
    "_highlightResult": {
      "id": {
        "value": "3",
        "matchLevel": "none",
        "matchedWords": []
      },
      "brand": {
        "value": "Huawei",
        "matchLevel": "none",
        "matchedWords": []
      },
      "image": {
        "value": "https://img.generation-nt.com/huawei-logo_109C058B01658325.jpg",
        "matchLevel": "none",
        "matchedWords": []
      }
    }
  },
  {
    "id": 2,
    "brand": "Samsung",
    "image": "http://image-us.samsung.com/SamsungUS/home/samsung-logo-191-1.jpg",
    "objectID": "2920550",
    "_highlightResult": {
      "id": {
        "value": "2",
        "matchLevel": "none",
        "matchedWords": []
      },
      "brand": {
        "value": "Samsung",
        "matchLevel": "none",
        "matchedWords": []
      },
      "image": {
        "value": "http://image-us.samsung.com/SamsungUS/home/samsung-logo-191-1.jpg",
        "matchLevel": "none",
        "matchedWords": []
      }
    }
  }
]} />
```