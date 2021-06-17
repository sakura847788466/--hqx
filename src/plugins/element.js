import Vue from 'vue'
import CollapseTransition from 'element-ui/lib/transitions/collapse-transition';
import {
    Button,
    Dialog,
    Input,
    InputNumber,
    Loading,
    Message,
    MessageBox,
    Table,
    TableColumn,
    TabPane,
    Tabs,
    Form,
    FormItem,
    Switch,
    Notification,
    Radio,
    Divider,
    Select,
    Option,
    Tag,
    DatePicker,
    Dropdown,
    DropdownItem,
    Pagination,
    CheckboxGroup,
    Checkbox,
    Popover,
    Tooltip,
    Row,
    Col,
    Autocomplete,
    Card,
    Container,
    Aside,
    Main,
    Header,
    Menu,
    Submenu,
    MenuItemGroup,
    MenuItem,
    Upload,
    BreadcrumbItem,
    Breadcrumb,
    Progress,
    TimePicker,
    RadioGroup,
    Calendar,
    Image,
    Carousel,
    ButtonGroup,
    CarouselItem,
    Collapse,
    CollapseItem,
    RadioButton,
} from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.component(Button.name, Button);
Vue.component(Input.name, Input);
Vue.component(InputNumber.name, InputNumber);
Vue.component(Tabs.name, Tabs);
Vue.component(TabPane.name, TabPane);
Vue.component(Table.name, Table);
Vue.component(TableColumn.name, TableColumn);
Vue.component(Dialog.name, Dialog);
Vue.component(Form.name, Form);
Vue.component(FormItem.name, FormItem);
Vue.component(Switch.name, Switch);
Vue.component(Radio.name, Radio);
Vue.component(Divider.name, Divider);
Vue.component(Select.name, Select);
Vue.component(Option.name, Option);
Vue.component(Tag.name, Tag);
Vue.component(Notification.name, Notification);
Vue.component(DatePicker.name, DatePicker);
Vue.component(Dropdown.name, Dropdown);
Vue.component(DropdownItem.name, DropdownItem);
Vue.component(Pagination.name, Pagination);
Vue.component(CheckboxGroup.name, CheckboxGroup);
Vue.component(Checkbox.name, Checkbox);
Vue.component(Popover.name, Popover);
Vue.component(CollapseTransition.name, CollapseTransition)
Vue.component(Tooltip.name, Tooltip)
Vue.component(Row.name, Row)
Vue.component(Col.name, Col)
Vue.component(Autocomplete.name, Autocomplete)
Vue.component(Card.name, Card)
Vue.component(Container.name, Container)
Vue.component(Aside.name, Aside)
Vue.component(Main.name, Main)
Vue.component(Header.name, Header)
Vue.component(Menu.name, Menu)
Vue.component(Submenu.name, Submenu)
Vue.component(MenuItemGroup.name, MenuItemGroup)
Vue.component(MenuItem.name, MenuItem)
Vue.component(Upload.name, Upload)
Vue.component(BreadcrumbItem.name, BreadcrumbItem)
Vue.component(Breadcrumb.name, Breadcrumb)
Vue.component(Progress.name, Progress)
Vue.component(TimePicker.name, TimePicker)
Vue.component(RadioGroup.name, RadioGroup)
Vue.component(Calendar.name, Calendar)
Vue.component(Image.name, Image)
Vue.component(Carousel.name, Carousel)
Vue.component(ButtonGroup.name, ButtonGroup)
Vue.component(CarouselItem.name, CarouselItem)
Vue.component(Collapse.name, Collapse)
Vue.component(CollapseItem.name, CollapseItem)
Vue.component(RadioButton.name, RadioButton)
Vue.prototype.$loading = Loading.service;
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$prompt = MessageBox.prompt;
Vue.prototype.$notify = Notification;
Vue.prototype.$message = Message;

Vue.config.productionTip = false