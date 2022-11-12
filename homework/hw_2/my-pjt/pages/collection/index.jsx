import { Text } from "../../components/Text/Text";

export default function MyCollection() {
  return (
    <main>
      <Text>
        The example shows a element that goes diagonally across the page. At its
        center, two elliptical arcs have been cut out (x radius = 30, y radius =
        50). In the first one, the x-axis-rotation has been left at 0, so the
        ellipse that the arc travels around (shown in gray) is oriented straight
        up and down. For the second arc, though, the x-axis-rotation is set to
        -45 degrees. This rotates the ellipse so that it is aligned with its
        minor axis along the path direction, as shown by the second ellipse in
        the example image.
      </Text>
    </main>
  );
}
