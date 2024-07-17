---
title: Button
desc: The QBtn Vue component is a button with features like shaping, loading state, ripple and more.
keys: QBtn
examples: QBtn
---

Quasar has a component called QBtn which is a button with a few extra useful features. For instance, it comes in two shapes: rectangle (default) and round. It also has the material ripple effect baked in (which can be disabled).

The button component also comes with a spinner or loading effect. You would use this for times when app execution may cause a delay and you want to give the user some feedback about that delay. When used, the button will display a spinning animation as soon as the user clicks the button.

When not disabled or spinning, QBtn emits a `@click` event, as soon as it is clicked or tapped.

## Usage

### Standard

<DocExample title="Standard buttons" file="Standard" />
