# Front-end Style Guide

## Layout

The designs were created to the following widths:

- Mobile: 375px
- Desktop: 1440px

## Colors

### Primary

#### Text

- Very dark desaturated blue: hsl(238, 29%, 16%)
- Soft red: hsl(14, 88%, 65%)

#### Gradient

Background gradient:

- Soft violet: hsl(273, 75%, 66%)
- Soft blue: hsl(240, 73%, 65%)

### Neutral

#### Text

- Very dark grayish blue: hsl(237, 12%, 33%)
- Dark grayish blue: hsl(240, 6%, 50%)

#### Dividers

- Light grayish blue: hsl(240, 5%, 91%)

## Typography

### Body Copy

- Font size: 12px

### Font

- Family: [Kumbh Sans](https://fonts.google.com/specimen/Kumbh+Sans)
- Weights: 400, 700



# SCSS

```scss
$backgroundColor: #fff;
$black: #000;

* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

@mixin horizontal-list {
	list-style: none;
	display: flex;

	li {
			padding: 7px 14px;
		}
}
// Para a utilização o @mixin basta atribuir o nome do mixin em um @include

#app {
	background-color: $backgroundColor;
	color: coral;
	width: 100vw;
	height: 100vh;
	padding: 24px;


	h1 {
		font-size: 24px;
		font-weight: 600;
		// utilização do rgba no css padrão
		// background-color: rgba(0, 0, 0, 0.1);
		background-color: rgba($black, 0.1);
		padding: 24px;

		@media screen and (min-width: 560px) {
			font-size: 48px;
		}
	}

	nav ul {
		background-color: rgba(peachpuff, .4);
		@include horizontal-list;
	}

	.breadcrumb ul {
		background-color: rgba(#0099ff, .1);
		@include horizontal-list;
	}

}
```
