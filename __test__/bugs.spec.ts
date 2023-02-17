import { expect, describe, it } from "@jest/globals";

import { packAndUnpack } from "./util";

describe("Bugs", () => {
	describe("Numbers", () => {
		it("gives back wrong value on INT64_MAX ", async () => {
			expect(packAndUnpack(0x7fffffffffffffff)).not.toEqual(0x7fffffffffffffff);
		});
	});
});
