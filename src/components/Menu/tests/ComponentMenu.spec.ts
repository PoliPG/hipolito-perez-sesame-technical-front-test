import { mount } from '@vue/test-utils'
import OMenu from '../OMenu.vue'
import { expect, test } from 'vitest'
import type { MenuItem } from '../OMenuItem.vue'
import { describe } from 'node:test'

const menu: MenuItem[] = [
  {
    name: 'Administrador',
    items: [
      {
        icon: 'star',
        name: 'Talento',
        items: [
          {
            name: 'Reclutamiento'
          },
          {
            name: 'Asistencias'
          },
          {
            name: 'Ausencias'
          }
        ]
      },
      {
        name: 'Fichaje'
      }
    ]
  }
]

const defaultMenuTest = test.extend({
  props: {
    items: menu,
    defaultItem: 'Reclutamiento'
  }
})

describe('Testing mount component ', () => {
  defaultMenuTest('Testing OMenu props', async ({ props }) => {
    //Arrange
    const wrapper = await mount(OMenu, { props })
    const item = wrapper.get('[data-menu-item-name="Reclutamiento"] > span')

    //Assert
    expect(item.text()).toContain('Reclutamiento')
  })

  defaultMenuTest('Testing active item', async ({ props }) => {
    //Arrange
    const wrapper = await mount(OMenu, { props })
    const item = wrapper.get('[data-menu-item-name="Reclutamiento"].active > span')

    //Assert
    expect(item.text()).toContain('Reclutamiento')
  })

  defaultMenuTest('Testing non active item', async ({ props }) => {
    //Arrange
    const wrapper = await mount(OMenu, { props })
    const item = wrapper.find('[data-menu-item-name="Asistencias"].active > span')

    //Assert
    expect(item.exists()).toBe(false)
  })

  defaultMenuTest('Testing active parent itemsa', async ({ props }) => {
    //Arrange
    const wrapper = await mount(OMenu, { props })
    const item = wrapper.get('[data-menu-item-name="Talento"].active > span')

    //Assert
    expect(item.text()).toContain('Talento')
  })

  defaultMenuTest('Testing non active parent items', async ({ props }) => {
    //Arrange
    const wrapper = await mount(OMenu, { props })
    const item = wrapper.find('[data-menu-item-name="Fichaje"].active > span')

    //Assert
    expect(item.exists()).toBe(false)
  })
})

describe('Testing user interaction component ', async () => {
  defaultMenuTest('Testing click item', async ({ props }) => {
    //Arrange
    const wrapper = await mount(OMenu, { props })
    const item = wrapper.find('[data-menu-item-name="Asistencias"]')

    //Act
    await item.trigger('click')

    //Assert
    expect(item.classes()).toContain('active')
  })

  defaultMenuTest('Testing click parent', async ({ props }) => {
    //Arrange
    const wrapper = await mount(OMenu, { props })
    const item = wrapper.find('[data-menu-item-name="Talento"]')

    //Act
    await item.trigger('click')

    const itemSubmenu = wrapper.find('[data-menu-item-name="Asistencias"]')

    //Assert
    expect(itemSubmenu.exists()).toBe(false)
  })
})
