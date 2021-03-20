/**
 * Categorizes incoming documents into a specific number of groups, called buckets, based on a specified expression.
 * Bucket boundaries are automatically determined in an attempt to evenly distribute the documents into the specified
 * number of buckets.
 *
 * Each bucket is represented as a document in the output. The document for each bucket contains:
 *
 * An _id object that specifies the bounds of the bucket.
 * The _id.min field specifies the inclusive lower bound for the bucket.
 * The _id.max field specifies the upper bound for the bucket. This bound is exclusive for all buckets except the final
 * bucket in the series, where it is inclusive.
 * A count field that contains the number of documents in the bucket. The count field is included by default when the
 * output document is not specified.
 */
export interface BucketAutoStageInterface {
    /**
     * An expression to group documents by. To specify a field path, prefix the field name with a dollar sign $ and
     * enclose it in quotes.
     */
    groupBy: any;
    /**
     * A positive 32-bit integer that specifies the number of buckets into which input documents are grouped.
     */
    buckets: number;
    /**
     * Optional. A document that specifies the fields to include in the output documents in addition to the _id field.
     * To specify the field to include, you must use accumulator expressions:
     *
     * <outputfield1>: { <accumulator>: <expression1> },
     *
     * ...
     *
     * The default count field is not included in the output document when output is specified. Explicitly specify the
     * count expression as part of the output document to include it:
     *
     * output: {
     *
     * <outputfield1>: { <accumulator>: <expression1> },
     *
     * ...
     *
     * count: { $sum: 1 }
     *
     * }
     */
    output?: {
        [key: string]: any;
    };
    /**
     * Optional. A string that specifies the preferred number series to use to ensure that the calculated boundary edges
     * end on preferred round numbers or their powers of 10.
     *
     * Available only if the all groupBy values are numeric and none of them are NaN.
     *
     * The suppported values of granularity are:
     *
     * "R5"
     * "R10"
     * "R20"
     * "R40"
     * "R80"
     * "1-2-5"
     * "E6"
     * "E12"
     * "E24"
     * "E48"
     * "E96"
     * "E192"
     * "POWERSOF2"
     */
    granularity?: string;
}
