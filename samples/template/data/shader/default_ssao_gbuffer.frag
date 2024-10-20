#version 330 core

in vec3 v_normal;
in vec3 v_frag_pos;

layout(location = 0) out vec4 o_frag_position;
layout(location = 1) out vec4 o_frag_normal;
layout(location = 3) out vec4 o_frag_diffuse_color;

void main()
{
	o_frag_position = vec4(v_frag_pos,1.0);
	o_frag_normal = vec4(v_normal,1.0);
	o_frag_diffuse_color = vec4(1.0,0,0,1.0);
}