import { mockRequest, mockResponse } from "../../__mocks__";
import { getUsersMock } from "../../handlers/users";

describe("getUsers", () => {
  it("should return an array of users", () => {
    getUsersMock(mockRequest, mockResponse);
    expect(mockResponse.send).toHaveBeenCalledWith([]);
  });
});
