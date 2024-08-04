import { mockRequest, mockResponse } from "../../__mocks__";
import { getUsers } from "../../controllers/userControllers";

describe("getUsers", () => {
  it("should return array of users", () => {
    getUsers(mockRequest, mockResponse);
    expect(mockResponse.send).toHaveBeenCalledWith([]);
  });
});
