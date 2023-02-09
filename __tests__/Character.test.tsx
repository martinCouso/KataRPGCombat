import React from 'react';
import {render, screen, within, fireEvent} from '@testing-library/react-native';
import Character from '../src/features/Character';

describe('Kata Step 1', () => {
  //const mockFn = jest.fn();

  it('should have 1000 health points', () => {
    render(<Character />);
    const {getByText} = within(screen.getByTestId('health-points'));

    expect(getByText('1000hp')).toBeTruthy();
  });

  it('should be lvl 1', () => {
    render(<Character />);
    const {getByText} = within(screen.getByTestId('lvl'));

    expect(getByText('1')).toBeTruthy();
  });

  it('should be alive', () => {
    render(<Character />);
    const {getByText} = within(screen.getByTestId('status'));

    expect(getByText('alive')).toBeTruthy();
  });

  it('character receive damage', () => {
    render(<Character />);
    const {getByText} = within(screen.getByTestId('health-points'));
    expect(getByText('1000hp')).toBeTruthy();

    const dmgButton = screen.getByTestId('receiveDamage');
    fireEvent.press(dmgButton);

    expect(getByText('900hp')).toBeTruthy();
  });

  it('should be dead', () => {
    render(<Character />);
    const {getByText} = within(screen.getByTestId('status'));
    expect(getByText('alive')).toBeTruthy();

    const dmgButton = screen.getByTestId('receiveDamage');

    fireEvent.press(dmgButton);
    fireEvent.press(dmgButton);
    fireEvent.press(dmgButton);
    fireEvent.press(dmgButton);
    fireEvent.press(dmgButton);
    fireEvent.press(dmgButton);
    fireEvent.press(dmgButton);
    fireEvent.press(dmgButton);
    fireEvent.press(dmgButton);
    fireEvent.press(dmgButton);

    expect(getByText('dead')).toBeTruthy();
  });
});
