(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{J2hS:function(n,e,t){"use strict";t.r(e);var a=t("rt45"),o=t("q1tI"),r=t.n(o),l=t("5M6V"),u=t("z9f5"),i=t("ttZb"),_=t("lTCR"),s=t.n(_),c=r.a.createElement;function p(){var n=Object(a.a)(["\nquery CategoryPage($slug: String) {\n  pageBy(uri: $slug){\n    __typename\n    title\n    id\n    date\n    desiredSlug\n    excerpt\n    featuredImage {\n      sourceUrl\n      altText\n    }\n    blocks {\n      __typename\n      ... on CoreHeadingBlock {\n        __typename\n        attributes {\n          __typename\n          ... on CoreHeadingBlockAttributes {\n            __typename\n            content\n            level\n          }\n        }\n      }\n      ... on CoreImageBlock {\n        attributes {\n          __typename\n          ... on CoreImageBlockAttributes {\n            __typename\n            url\n            caption\n          }\n        }\n      }\n      ... on CoreQuoteBlock {\n        __typename\n        attributes {\n          ... on CoreQuoteBlockAttributes {\n            __typename\n            quote: value\n            source: citation\n          }\n        }\n      }\n      ... on CoreListBlock {\n        __typename\n        attributes {\n          values\n        }\n      }\n      ... on CoreParagraphBlock {\n        __typename\n        name\n        attributes {\n          ... on CoreParagraphBlockAttributesV3 {\n            __typename\n            content\n            dropCap\n            align\n          }\n        }\n      }\n      ... on CoreGalleryBlock {\n        __typename\n        attributes {\n          ... on CoreGalleryBlockAttributes {\n            __typename\n            ids\n            images\n            linkTo\n          }\n        }\n      }\n    }\n  }\n}\n\n\n"]);return p=function(){return n},n}var g=s()(p());e.default=function(n){var e=n.slug,t=Object(i.b)(g,{variables:{slug:e}}),a=t.loading,o=t.error;t.data;return a?c("p",null,"Loading Post..."):o?c("p",null,"Something wrong happened!"):c(r.a.Fragment,null,c(u.a,null),c(l.a,null,c("p",null,e," H")))}},v3Q9:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/section/[slug]",function(){return t("J2hS")}])}},[["v3Q9",1,2,5,0,18,19]]]);