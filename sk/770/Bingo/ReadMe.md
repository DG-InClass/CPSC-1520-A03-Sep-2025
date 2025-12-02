# BINGO

Bingo Cards: Each player receives a Bingo card, typically a 5x5 grid with the letters B-I-N-G-O across the top. Each column corresponds to a specific range of numbers:

- **B**: 1-15
- **I**: 16-30
- **N**: 31-45 (with a free space in the center)
- **G**: 46-60
- **O**: 61-75

----

## Generating Bingo Cards

The Bingo card will be an HTML table with a `<thead>` for the "BINGO" letters and a `<tbody>` for the rows of numbers.


```html
    <table data-bingo-card>
```

```html
<thead>
    <tr>
        <th>B</th>
        <th>I</th>
        <th>N</th>
        <th>G</th>
        <th>O</th>
    </tr>
</thead>
```

```html
<tr>
    <td data-value="14">14</td>
    <td data-value="30">30</td>
    <td data-value="41">41</td>
    <td data-value="53">53</td>
    <td data-value="74">74</td>
</tr>
```

If a cell is noted as a "free" cell, then it will have a CSS class name of `'free'`.
