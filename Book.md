---
book:
  title: "<%tp.file.cursor()%>"
  authors: [<%tp.file.cursor()%>]
  website: "<%tp.file.cursor()%>"
  editions:
    - label: Paperback|Hardcover<%tp.file.cursor()%>, ?<%tp.file.cursor()%> Edition
      cover:
      publication:
        date: 0000-00-00<%tp.file.cursor()%>
        publisher: <%tp.file.cursor()%>
      language: English
      stats:
        pages: 0<%tp.file.cursor()%>
      identifiers:
        - {label: Amazon,    type: url,  id: "<%tp.file.cursor()%>"}
        - {label: Paperback|Hardcover<%tp.file.cursor()%>, type: isbn, id: 0<%tp.file.cursor()%>}
        - {label: Goodreads, type: url,  id: "<%tp.file.cursor()%>"}
    - label: Kobo Store<%tp.file.cursor()%>
      publication:
        date: 0000-00-00<%tp.file.cursor()%>
        publisher: <%tp.file.cursor()%>
      stats:
        words: 0
      identifiers:
        - {label: Kobo Store,      type: url,  id: "<%tp.file.cursor()%>"}
        - {label: Info Page,       type: isbn, id: 0<%tp.file.cursor()%>}
        - {label: eBook Details,   type: isbn, id: 0<%tp.file.cursor()%>}
        - {label: Goodreads,       type: url,  id: ""}
        - {label: ePUB3 DRM-Free,  type: git,  id: e69de29bb2d1d6434b8b29ae775ad8c2e48c5391}
        - {label: ePUB2 Adobe DRM, type: git,  id: e69de29bb2d1d6434b8b29ae775ad8c2e48c5391}
        - {label: ePUB3 Adobe DRM, type: git,  id: e69de29bb2d1d6434b8b29ae775ad8c2e48c5391}
        - {label: ePUB3 DeDRM,     type: git,  id: e69de29bb2d1d6434b8b29ae775ad8c2e48c5391}
    - label: O'Reilly
      stats:
        words: 0
      identifiers:
        - {label: "O'Reilly", type: isbn, id: 0}
        - {label: "O'Reilly", type: url,  id: "https://www.oreilly.com/library/view/"}
        - {label: "O'Reilly", type: git,  id: "e69de29bb2d1d6434b8b29ae775ad8c2e48c5391"}
    - label: Kindle
      stats:
        words: 0
      identifiers:
        - {label: Kindle, type: isbn, id: 0}
        - {label: Kindle, type: url,  id: ""}
---

```dataviewjs
await dv.view("Views/Book Info");
```

## Notes

Origin::
Started Reading::
Finished Reading::
