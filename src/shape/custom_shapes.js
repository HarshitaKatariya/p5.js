/**
 * @module Shape
 * @submodule Custom Shapes
 * @for p5
 * @requires core
 * @requires constants
 */

// uncomment the following once you need it (otherwise VS Code complains):
// import * as constants from '../core/constants';

// ---- GENERAL CLASSES ----

class Shape {    
    constructor() {
        
    }
}

class Contour {
    constructor() {
    
    }
}

// abstract class
class ShapePrimitive {
    constructor() {
    
    }
}

class Vertex {
    constructor() {
    
    }
}

// ---- PATH PRIMITIVES ----

class Anchor {
    constructor() {
    
    }
}

// abstract class
class Segment extends ShapePrimitive {
    constructor() {
    
    }
}

class LineSegment extends Segment {
    constructor() {
    
    }
}

class BezierSegment extends Segment {
    constructor() {
    
    }
}

// consider type and end modes -- see #6766)
// may want to use separate classes, but maybe not
class SplineSegment extends Segment {
    constructor() {
    
    }
}

// ---- ISOLATED PRIMITIVES ----

class Point extends ShapePrimitive {
    constructor() {
    
    }
}

class Line extends ShapePrimitive {
    constructor() {
    
    }
}

class Triangle extends ShapePrimitive {
    constructor() {
    
    }
}

class Quad extends ShapePrimitive {
    constructor() {
    
    }
}

// ---- TESSELLATION PRIMITIVES ----

class TriangleFan extends ShapePrimitive {
    constructor() {
    
    }
}

class TriangleStrip extends ShapePrimitive {
    constructor() {
    
    }
}

class QuadStrip extends ShapePrimitive {
    constructor() {
    
    }
}

// ---- PRIMITIVE VISITORS ----

// abstract class
class PrimitiveVisitor {
    constructor() {
    
    }
}

// using this instead of PrimitiveToContext2DConverter for now
class PrimitiveToPath2DConverter extends PrimitiveVisitor {
    constructor() {
    
    }
}

class PrimitiveToVerticesConverter extends PrimitiveVisitor {
    constructor() {
    
    }
}

class PointAtLengthGetter extends PrimitiveVisitor {
    constructor() {
    
    }
}

function customShapes(p5, fn) {
    // ---- GENERAL CLASSES ----

    /**
     * @private
     * A class to describe a custom shape made with 
     * <a href="#/p5/beginShape">beginShape()</a>/<a href="#/p5/endShape">endShape()</a>.
     * 
     * Every `Shape` has a `kind`. The kind takes any value that
     * can be passed to <a href="#/p5/beginShape">beginShape()</a>:
     * 
     * - `PATH`
     * - `POINTS`
     * - `LINES`
     * - `TRIANGLES`
     * - `QUADS`
     * - `TRIANGLE_FAN`
     * - `TRIANGLE_STRIP`
     * - `QUAD_STRIP`
     * 
     * A `Shape` of any kind consists of `contours`, which can be thought of as
     * subshapes (shapes inside another shape).
     * 
     * To construct a `Shape` called `myShape`, methods such as `myShape.beginShape()`, 
     * `myShape.vertex()`, and `myShape.endShape()` may be called.
     * 
     * @class p5.Shape
     * @constructor
     * @param {(PATH|POINTS|LINES|TRIANGLES|QUADS|TRIANGLE_FAN|TRIANGLE_STRIP|QUAD_STRIP)} [kind=PATH] either 
     * PATH, POINTS, LINES, TRIANGLES, QUADS, TRIANGLE_FAN, TRIANGLE_STRIP, or QUAD_STRIP.
     */

    p5.Shape = Shape;

    /**
     * @private
     * A class to describe a contour made with
     * <a href="#/p5/beginContour">beginContour()</a>/<a href="#/p5/endContour">endContour()</a>.
     * 
     * Contours are subshapes: they're made inside of shapes created with
     * <a href="#/p5/beginShape">beginShape()</a>/<a href="#/p5/endShape">endShape()</a>.
     * For example, a contour may be used to create a hole in a shape.
     * 
     * Contours can have any `kind` that a shape can have:
     * 
     * - `PATH`
     * - `POINTS`
     * - `LINES`
     * - `TRIANGLES`
     * - `QUADS`
     * - `TRIANGLE_FAN`
     * - `TRIANGLE_STRIP`
     * - `QUAD_STRIP`
     * 
     * By default, a contour has the same kind as the shape that contains it, 
     * but different kinds of contours can be made inside the same shape.
     * 
     * A `Contour` of any kind consists of `primitives`, which are the most basic
     * shapes that can be drawn. For example, if a contour is a hexagon, then
     * it's made from six line-segment primitives.
     * 
     * @class p5.Contour
     * @constructor
     * @param {(PATH|POINTS|LINES|TRIANGLES|QUADS|TRIANGLE_FAN|TRIANGLE_STRIP|QUAD_STRIP)} [kind=PATH] either 
     * PATH, POINTS, LINES, TRIANGLES, QUADS, TRIANGLE_FAN, TRIANGLE_STRIP, or QUAD_STRIP.
     */

    p5.Contour = Contour;

    /**
     * @private
     * A class responsible for... 
     */

    p5.ShapePrimitive = ShapePrimitive;

    /**
     * @private
     * A class to describe a vertex (a point on a shape), in 2D or 3D.
     * 
     * Vertices are the basic building blocks of all `p5.Shape` objects, including
     * shapes made with <a href="#/p5/vertex">vertex()</a>, <a href="#/p5/arcVertex">arcVertex()</a>,
     * <a href="#/p5/bezierVertex">bezierVertex()</a>, and <a href="#/p5/splineVertex">splineVertex()</a>.
     * 
     * Like a point on an object in the real world, a vertex has different properties. These include coordinate
     * properties `position`, `textureCoordinates`, and `normal`, as well as color properties `fill` and `stroke`.
     * 
     * A vertex called `myVertex` with position coordinates `(2, 3, 5)` and a green stroke may be created like this:
     * 
     * ```js
     * let myVertex = new p5.Vertex({
     *   position: createVector(2, 3, 5),
     *   stroke: color('green')
     * });
     * ```
     * 
     * Note:
     * - Coordinate properties are `p5.Vector` objects. 
     * - Color properties are `p5.Color` objects. 
     * 
     * Properties may be specified in all the ways supported by `createVector()` 
     * and `color()`. For example, a vertex position can be set with two coordinates, 
     * as in  `createVector(2, 3)`.
     * 
     * Vertices also have a `toArray()` method that converts 
     * a full vertex object to a one-dimensional array.
     * 
     * @class p5.Vertex
     * @constructor
     * @param {Object} [properties] vertex properties.
     */

    p5.Vertex = Vertex;

    // ---- PATH PRIMITIVES ----

    /**
     * @private
     * A class responsible for... 
     */

    p5.Anchor = Anchor;

    /**
     * @private
     * A class responsible for...
     */

    p5.Segment = Segment;

    /**
     * @private
     * A class responsible for... 
     */

    p5.LineSegment = LineSegment;

    /**
     * @private
     * A class responsible for...
     */

    p5.BezierSegment = BezierSegment;

    /**
     * @private
     * A class responsible for... 
     */

    p5.SplineSegment = SplineSegment;

    // ---- ISOLATED PRIMITIVES ----

    /**
     * @private
     * A class responsible for... 
     */

    p5.Point = Point;

    /**
     * @private
     * A class responsible for... 
     */

    p5.Line = Line;

    /**
     * @private
     * A class responsible for...
     */

    p5.Triangle = Triangle;

    /**
     * @private
     * A class responsible for... 
     */

    p5.Quad = Quad;

    // ---- TESSELLATION PRIMITIVES ----

    /**
     * @private
     * A class responsible for... 
     */

    p5.TriangleFan = TriangleFan;

    /**
     * @private
     * A class responsible for... 
     */

    p5.TriangleStrip = TriangleStrip;

    /**
     * @private
     * A class responsible for...
     */

    p5.QuadStrip = QuadStrip;

    // ---- PRIMITIVE VISITORS ----

    /**
     * @private
     * A class responsible for... 
     */

    p5.PrimitiveVisitor = PrimitiveVisitor;

    /**
     * @private
     * A class responsible for...
     */

    p5.PrimitiveToPath2DConverter = PrimitiveToPath2DConverter;

    /**
     * @private
     * A class responsible for...
     */

    p5.PrimitiveToVerticesConverter = PrimitiveToVerticesConverter;

    /**
     * @private
     * A class responsible for...
     */

    p5.PointAtLengthGetter = PointAtLengthGetter;
    
    // ---- FUNCTIONS ----

    // Note: Code is commented out for now, to avoid conflicts with the existing implementation.
    
    /**
     * Top-line description
     *
     * More details...
     */

    // fn.beginContour = function() {
    //     // example of how to call an existing p5 function:
    //     // this.background('yellow');
    // };
    
    /**
     * Top-line description
     *
     * More details...
     */

    // fn.beginShape = function() {

    // };

    /**
     * Top-line description
     *
     * More details...
     */

    // fn.bezierVertex = function() {

    // };

    /**
     * Top-line description
     *
     * More details...
     */

    // fn.curveVertex = function() {

    // };

    /**
     * Top-line description
     *
     * More details...
     */

    // fn.endContour = function() {

    // };

    /**
     * Top-line description
     *
     * More details...
     */

    // fn.endShape = function() {

    // };

    /**
     * Top-line description
     *
     * More details...
     */

    // fn.vertex = function() {

    // };

    /**
     * Top-line description
     *
     * More details...
     */

    // fn.normal = function() {

    // };

    /**
     * Top-line description
     *
     * More details...
     */

    // fn.vertexProperty = function() {

    // };
}

export default customShapes;
export {
    Shape,
    Contour,
    ShapePrimitive,
    Vertex,
    Anchor,
    Segment,
    LineSegment,
    BezierSegment,
    SplineSegment,
    Point,
    Line,
    Triangle,
    Quad,
    TriangleFan,
    TriangleStrip,
    QuadStrip,
    PrimitiveVisitor,
    PrimitiveToPath2DConverter,
    PrimitiveToVerticesConverter,
    PointAtLengthGetter
};

if (typeof p5 !== 'undefined') {
    customShapes(p5, p5.prototype);
}