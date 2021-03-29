import {setPayloadValidator} from "./set-payload.validator";

describe('set validators', () => {
    describe('setPayloadValidator', () => {
        const payloadList: any[] = [
            {},
            { tests: undefined },
            { tests: 'unit' }
        ];
        test.each([
            [setPayloadValidator(payloadList[0]),
                'No fields have been added.'],
            [setPayloadValidator(payloadList[1]),
                'One or more field values are not defined.'],
            [setPayloadValidator(payloadList[2]), ''],
        ])('%o should return %s', (
            operation: any,
            expected: any
        ) => {
            expect(operation).toEqual(expected);
        });
    });
});
