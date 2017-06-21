<?php
defined('BASEPATH') OR exit('No direct script access allowed');
require(APPPATH.'libraries/REST_Controller.php');
class Users extends REST_Controller {

	public function __construct()
{
	parent::__construct();

}
	public function users_get()
	{

		$data = array('returned:'.$this->get('id') );
		$this->response($data);
	}
}
