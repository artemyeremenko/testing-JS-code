describe("ageClassification", function () {
  it("Возврашается null если возраст меньше 0", function () {
    const result = ageClassification(-1);
    expect(result).toBe(null);
  });
  it("Возврашается детский возраст если возраст равен 1", function () {
    const result = ageClassification(1);
    expect(result).toBe("детский возраст");
  });
  it("Возврашается детский возраст если возраст меньше 24", function () {
    const result = ageClassification(24);
    expect(result).toBe("детский возраст");
  });
  it("Возврашает молодой возраст если возраст больше 24", function () {
    const result = ageClassification(24.01);
    expect(result).toBe("молодой возраст");
  });
  it("Возврашает молодой возраст если возраст равен 44", function () {
    const result = ageClassification(44);
    expect(result).toBe("молодой возраст");
  });
  it("Возврашает средний возраст если возраст больше 44", function () {
    const result = ageClassification(44.01);
    expect(result).toBe("средний возраст");
  });
  it("Возврашает средний возраст если возраст равен 65", function () {
    const result = ageClassification(65);
    expect(result).toBe("средний возраст");
  });
  it("Возврашает пожилой возраст если возраст больше 65", function () {
    const result = ageClassification(65.1);
    expect(result).toBe("пожилой возраст");
  });
  it("Возврашает пожилой возраст если возраст равен 75", function () {
    const result = ageClassification(75);
    expect(result).toBe("пожилой возраст");
  });
  it("Возврашает старческий возраст если возраст больше 75", function () {
    const result = ageClassification(75.01);
    expect(result).toBe("старческий возраст");
  });
  it("Возврашает старческий возраст если возраст равен 90", function () {
    const result = ageClassification(90);
    expect(result).toBe("старческий возраст");
  });
  it("Возврашает долгожители если возраст больше 90", function () {
    const result = ageClassification(90.01);
    expect(result).toBe("долгожители");
  });
  it("Возврашает долгожители если возраст равен 120", function () {
    const result = ageClassification(122);
    expect(result).toBe("долгожители");
  });
  it("Возврашается null если возраст больше 122", function () {
    const result = ageClassification(122.01);
    expect(result).toBe(null);
  });
  it("Возврашается null если возраст равен 150", function () {
    const result = ageClassification(150);
    expect(result).toBe(null);
  });
});

describe("weekFn", function () {
  it("Возврашается Понедельник если день недели 1", function () {
    const result = weekFn(1);
    expect(result).toBe("Понедельник");
  });
  it("Возврашается Среда если день недели 3", function () {
    const result = weekFn(3);
    expect(result).toBe("Среда");
  });
  it("Возврашается Воскресенье если день недели 7", function () {
    const result = weekFn(7);
    expect(result).toBe("Воскресенье");
  });
  it("Возврашается null если день недели 9", function () {
    const result = weekFn(9);
    expect(result).toBe(null);
  });
  it("Возврашается null если день недели 1.5", function () {
    const result = weekFn(1.5);
    expect(result).toBe(null);
  });
  it("Возврашается null если день недели 2", function () {
    const result = weekFn("2");
    expect(result).toBe(null);
  });
});

describe("defUpperStr", function () {
  it('"MY TEXT" должен отобразиться в верхнем регистре', function () {
    const mt = "my text";
    expect(defUpperStr(mt)).toBe("MY TEXT");
  });
  it('"DEFAULT TEXT" должен быть возвращен в верхнем регистре', function () {
    const dt = "";
    expect(defUpperStr(dt)).toBe("DEFAULT TEXT");
  });
});
