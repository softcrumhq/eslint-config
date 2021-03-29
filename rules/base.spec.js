/**
 *
 *
 */
const base = require('./base');

/**
 * Configuracion del contador
 *
 */
let counter = 0;
function getCounter() {
  counter += 1;
  return counter < 10 ? `0${counter}` : counter;
}

/**
 * Starting tests
 *
 */
describe('Test - Rules base', () => {
  /**
   *
   * Se valida si el archivo se encuentra definido
   */
  test(`Test ${getCounter()} - File`, async () => {
    counter += 1;
    expect(base).toBeDefined();
  }, 500);
  /**
   *
   * Se valida si en el archivo se encuentra definidas las configuraciones
   */
  test(`Test ${getCounter()} - ParserOptions`, async () => {
    counter += 1;
    expect(base).toBeDefined();
    expect(base.parserOptions).toBeDefined();
    expect(typeof base.parserOptions).toEqual('object');
    expect(Object.keys(base.parserOptions).length).toBeGreaterThanOrEqual(0);
  }, 500);
  /**
   *
   * Se valida si en el archivo se encuentra definidas los complementos
   */
  test(`Test ${getCounter()} - Plugins`, async () => {
    counter += 1;
    expect(base).toBeDefined();
    expect(base.plugins).toBeDefined();
    expect(Array.isArray(base.plugins)).toEqual(true);
    expect(base.plugins.length).toBeGreaterThanOrEqual(0);
  }, 500);
  /**
   *
   * Se valida si en el archivo se encuentra definidas las reglas
   */
  test(`Test ${getCounter()} - Rules`, async () => {
    counter += 1;
    expect(base).toBeDefined();
    expect(base.rules).toBeDefined();
    expect(typeof base.rules).toEqual('object');
    expect(Object.keys(base.rules).length).toBeGreaterThanOrEqual(0);
  }, 500);
});
