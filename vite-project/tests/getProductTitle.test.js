import { getProductTitle } from "../functions/getProductTitle";
import { expect, test, vi } from "vitest";

const mockFetch = vi.fn((url)=>{
    return { json: () => 
    ({
        title: "iPhone 9",
    })
}
});

// const spy = vi.spyOn("fetch", getProductTitle);

test("should get title", async () => {
  vi.stubGlobal("fetch", mockFetch);
  expect(fetch).toHaveBeenCalledWith("https://dummyjson.com/products/1")
});

// expect(await getProductTitle(1)).toBe("iPhone 9");
// test("should throw error wrong product", async () => {
//     expect(await getProductTitle(8888)).toThrowError("Failed to fetch product")
//   });
